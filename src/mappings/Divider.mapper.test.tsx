import { describe, it, expect, vi, beforeEach } from 'vitest';
import dividerJson from './Divider.json';
import { createFigmaMock } from './test-utils';

// Create figma mock with mapper accessor
const figmaMock = createFigmaMock();
const mapperFn = figmaMock.getMapperFn;

// Mock the figma module before the tests run
vi.mock('@builder.io/dev-tools/figma', () => figmaMock.mockObject);

describe('Divider Mapper', () => {
  beforeEach(async () => {
    // Reset the module registry before each test
    vi.resetModules();
    // Import the mapper which will set the mapperFn
    await import('./Divider.mapper');
  });

  it('should render a mat-divider with vertical=true when Property 1 is "Vertical ⬇️"', () => {
    const result = mapperFn()(dividerJson);
    expect(result).toEqual({
      type: 'mat-divider',
      props: {
        vertical: true,
      },
      children: [],
    });
  });
  
  it('should render a mat-divider with vertical=false when Property 1 is "Horizontal ➡️"', () => {
    const horizontalDividerJson = {
      ...dividerJson,
      "Property 1": "Horizontal ➡️"
    };
    
    const result = mapperFn()(horizontalDividerJson);
    expect(result).toEqual({
      type: 'mat-divider',
      props: {
        vertical: false,
      },
      children: [],
    });
  });
});