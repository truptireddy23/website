'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'
import { GitBranch, Mail, Star, Users } from 'lucide-react'

type Feedback = {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
}

const stars = [1, 2, 3, 4, 5]

function RatingStars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {stars.map((star) => (
        <Star key={star} className={`size-4 ${star <= rating ? 'fill-primary text-primary' : 'text-muted-foreground/40'}`} />
      ))}
    </span>
  )
}

export function Contact() {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [formData, setFormData] = useState({ name: '', message: '', rating: '5' })
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const supabase = getSupabaseBrowserClient()
    let isMounted = true

    async function loadFeedback() {
      const { data, error: fetchError } = await supabase
        .from('feedback')
        .select('id, name, message, rating, created_at')
        .order('created_at', { ascending: false })

      if (isMounted) {
        if (fetchError) setError('Feedback could not be loaded right now.')
        else setFeedback(data ?? [])
        setIsLoading(false)
      }
    }

    loadFeedback()
    const channel = supabase
      .channel('public-feedback')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'feedback' }, (payload) => {
        if (isMounted) {
          setFeedback((current) => current.some((item) => item.id === payload.new.id) ? current : [payload.new as Feedback, ...current])
        }
      })
      .subscribe()

    return () => {
      isMounted = false
      void supabase.removeChannel(channel)
    }
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSubmitted(false)
    const name = formData.name.trim()
    const message = formData.message.trim()
    const rating = Number(formData.rating)

    if (!name || !message || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      setError('Please enter your name, feedback, and a rating from 1 to 5.')
      return
    }

    setIsSubmitting(true)
    const supabase = getSupabaseBrowserClient()
    const { data, error: insertError } = await supabase
      .from('feedback')
      .insert({ name, message, rating })
      .select('id, name, message, rating, created_at')
      .single()

    if (insertError) setError('Your feedback could not be submitted. Please try again.')
    else if (data) {
      setFeedback((current) => current.some((item) => item.id === data.id) ? current : [data, ...current])
      setFormData({ name: '', message: '', rating: '5' })
      setSubmitted(true)
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="bg-background/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Your perspective matters</p>
          <h2 className="text-balance text-4xl font-bold">Feedback</h2>
          <p className="mt-4 text-pretty leading-6 text-muted-foreground">Share your thoughts about my work or portfolio. Your feedback is always welcome.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Leave feedback</CardTitle>
              <CardDescription>A few words can make a big difference.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="feedback-name">Name
                  <input id="feedback-name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="rounded-lg border border-border bg-background px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Your name" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="feedback-message">Feedback message
                  <textarea id="feedback-message" name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5} className="resize-none rounded-lg border border-border bg-background px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="What did you think?" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium" htmlFor="feedback-rating">Rating
                  <select id="feedback-rating" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} className="rounded-lg border border-border bg-background px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
                    {stars.map((star) => <option key={star} value={star}>{star} {star === 1 ? 'star' : 'stars'}</option>)}
                  </select>
                </label>
                <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit feedback'}</Button>
                {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
                {submitted && <p role="status" className="text-sm text-primary">Thank you for sharing your feedback.</p>}
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">What people are saying</h3>
            {isLoading && <p className="text-sm text-muted-foreground">Loading feedback...</p>}
            {!isLoading && !feedback.length && <Card><CardContent className="py-8 text-center text-muted-foreground">Be the first to leave feedback.</CardContent></Card>}
            {feedback.map((item) => (
              <Card key={item.id}>
                <CardContent className="flex flex-col gap-3 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div><p className="font-semibold">{item.name}</p><p className="text-xs text-muted-foreground">{new Date(item.created_at).toLocaleString()}</p></div>
                    <RatingStars rating={item.rating} />
                  </div>
                  <p className="leading-6 text-muted-foreground">{item.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Card><CardHeader><CardTitle className="text-lg">Email</CardTitle></CardHeader><CardContent><Link href="mailto:tdreddy2@illinois.edu" className="flex items-center gap-2 text-primary hover:underline"><Mail className="size-4" />tdreddy2@illinois.edu</Link></CardContent></Card>
          <Card><CardHeader><CardTitle className="text-lg">Social</CardTitle></CardHeader><CardContent className="flex flex-wrap gap-5"><Link href="https://github.com/truptireddy23" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"><GitBranch className="size-4" />GitHub</Link><Link href="https://linkedin.com/in/truptireddy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"><Users className="size-4" />LinkedIn</Link></CardContent></Card>
        </div>
      </div>
    </section>
  )
}
