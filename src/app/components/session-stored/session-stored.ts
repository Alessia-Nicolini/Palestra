import { Component } from '@angular/core';
import { Session } from '../../models/session';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-session-stored',
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './session-stored.html',
  styleUrl: './session-stored.css',
})
export class SessionStored {

  sessions: Session[] = [];
  session: Session = new Session();

  ngOnInit() {
    this.loadSessions();
  }

  loadSessions() {
    const sessions: Session[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key && key.startsWith('Sessione del')) {
        const raw = localStorage.getItem(key);
        if (raw) {
          this.session = JSON.parse(raw);
          sessions.push(this.session);
        }
      }
    }

    this.sessions = sessions.sort((a, b) => {
      const dateA = new Date(a.title.replace('Sessione del ', ''));
      const dateB = new Date(b.title.replace('Sessione del ', ''));
      return dateB.getTime() - dateA.getTime();
    });
  }
}
