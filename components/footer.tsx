'use client'
import { CheckSquare } from 'lucide-react'

export default function Footer() {
  return (
    <div> {/* Footer */}
      <footer className="border-t border-border bg-background py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <CheckSquare className="w-6 h-6 text-primary" />
            <span>TaskFlow</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Designed for focus. Engineered for speed. The task manager for professionals.
          </p>
          <div className="flex gap-4 pt-2">
            {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="w-5 h-5" /></a> */}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 TaskFlow Inc. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer></div>
  )
}
