import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerContent = '';

  constructor() { }

  ngOnInit() {}

  onAddServer(serverNameInput: HTMLInputElement, newServerContent: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: newServerContent.value});
  }

  onAddBlueprint(newServerContent: HTMLInputElement, serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: serverNameInput.value, serverContent: newServerContent.value});
  }
}
