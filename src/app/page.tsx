
'use client'
import posthog from 'posthog-js'
import {Button} from '../components/ui/button'

export default function Home() {
  return (
    <div>
      <Button  onClick={() => {posthog.capture('test_event'); console.log('clicked mvp button')}}>
        Click me for an event
      </Button>
    </div>
  );
}