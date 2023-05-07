function onTick(timestamp: number): void {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (canvas) {
    const context = canvas.getContext('2d', { alpha: false }) as CanvasRenderingContext2D;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  window.requestAnimationFrame(onTick);
}

window.onkeydown = (event: KeyboardEvent): void => {
  switch (event.code) {
    default:
      console.info(`onKeyDown(): code = ${event.code}`);
      break;
  }
};

window.onkeyup = (event: KeyboardEvent): void => {
  switch (event.code) {
    default:
      console.info(`onKeyUp(): code = ${event.code}`);
      break;
  }
};

window.onload = function (): void {
  window.requestAnimationFrame(onTick);
};
