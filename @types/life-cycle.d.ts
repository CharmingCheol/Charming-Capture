interface OnInit {
  init(...args: any[]): void;
}

interface AsyncOnInit {
  init(...args: any[]): Promise<void>;
}

interface OnDestroy {
  destroy(): void;
}
