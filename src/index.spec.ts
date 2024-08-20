import path from 'path';

describe(path.basename(__filename), () => {
  it('doesnt execute', () => {
    expect(true).toBe(true);
  });
});

describe('does work', () => {
  it('does execute', () => {
    expect(true).toBe(true);
  })
})