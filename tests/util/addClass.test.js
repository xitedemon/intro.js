import addClass from "../../src/util/addClass";

describe('addClass', () => {
    test('should append when className is empty', () => {
      const el = document.createElement('div');
      addClass(el, 'myClass');
      expect(el.className).toBe('myClass');
    });

    test('should append when className is NOT empty', () => {
      const el = document.createElement('div');
      el.className = 'firstClass';

      addClass(el, 'secondClass');

      expect(el.className).toBe('firstClass secondClass');
    });

    test('should append when element is SVG', () => {
      const el = document.createElement('svg');
      el.className = 'firstClass';

      addClass(el, 'secondClass');

      expect(el.className).toBe('firstClass secondClass');
    });
  }
);
