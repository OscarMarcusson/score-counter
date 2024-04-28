import { Component, ElementRef, EnvironmentInjector, Input, ViewChild, createComponent } from '@angular/core';
import { ScoreRowComponent } from '../score-row/score-row.component';
import { ButtonComponent } from '../button/button.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-match',
    standalone: true,
    templateUrl: './match.component.html',
    styleUrl: './match.component.scss',
    imports: [ScoreRowComponent, ButtonComponent, ModalComponent]
})
export class MatchComponent {
  @Input() players: Player[] = [];
  @ViewChild('modal') modal: ElementRef<ModalComponent> = null!;
  selectedPlayer: Player | null = null;
  showModal: boolean = false;

  constructor(
    private injector: EnvironmentInjector,
  ) {
  }

  openModal(player: Player) {
    this.selectedPlayer = player;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}

export interface Player {
  name: string;
  score: number;
}
