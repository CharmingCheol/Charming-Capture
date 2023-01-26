interface OnInit {
  init(): void;
}

interface AsyncOnInit {
  init(): Promise<void>;
}

interface OnDestroy {
  destroy(): void;
}
