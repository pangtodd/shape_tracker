import Pentagram from './../src/js/penta.js';

describe('Pentagram', () => {

  test('should correctly succesfully create a pentagram object with five sides', () => {
    const pentagram = new Pentagram(2, 2, 2, 2, 2);
    expect(pentagram.side1).toEqual(2);
    expect(pentagram.side2).toEqual(2);
    expect(pentagram.side3).toEqual(2);
    expect(pentagram.side4).toEqual(2);
    expect(pentagram.side5).toEqual(2);
  });

  test('should correctly get the perimeter of a pentagram object', () => {
    const pentagram = new Pentagram(2,2,2,2,2);
    expect(pentagram.getPerimeter()).toEqual(10);
  });
});