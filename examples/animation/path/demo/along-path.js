import { Canvas } from '@antv/g-canvas';

const canvas = new Canvas({
  container: 'container',
  width: 600,
  height: 500,
});

const path = canvas.addShape('path', {
  attrs: {
    path:
      'M 100,300' +
      'l 50,-25' +
      'a 25,25 -30 0,1 50,-25' +
      'l 50,-25' +
      'a 25,50 -30 0,1 50,-25' +
      'l 50,-25' +
      'a 25,75 -30 0,1 50,-25' +
      'l 50,-25' +
      'a 25,100 -30 0,1 50,-25' +
      'l 50,-25' +
      'l 0, 200,' +
      'z',
    lineWidth: 4,
    stroke: '#1890FF',
  },
});

const circle = canvas.addShape('circle', {
  attrs: {
    x: 100,
    y: 300,
    r: 20,
    fill: '#F04864',
  },
});

circle.animate((ratio) => path.getPoint(ratio), {
  duration: 5000,
  repeat: true,
});
