const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('parameter should be a string', () => {
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('should work properly', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
    expect(handlerElephants('availability')).not.toContain('Monday');
    expect(handlerElephants('bornIn')).toBe(null);
  });
});
