import confetti from 'canvas-confetti';

confetti.create(null, {
  resize: true,
  useWorker: true,
})({ particleCount: 2400, spread: 500 });

console?.log('ready.');
