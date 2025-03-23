import { describe, it, expect, vi, beforeEach } from 'vitest';
import materialInputDropdownJson from './MaterialInputDropdown.json';
import { createFigmaMock } from './test-utils';

// Create figma mock with mapper accessor
const figmaMock = createFigmaMock();
const mapperFn = figmaMock.getMapperFn;

// Mock the figma module before the tests run
vi.mock('@builder.io/dev-tools/figma', () => figmaMock.mockObject);

describe('MaterialInputDropdown Mapper', () => {
  beforeEach(async () => {
    // Reset the module registry before each test
    vi.resetModules();
    // Import the mapper which will set the mapperFn
    await import('./MaterialInputDropdown.mapper');
  });

  it('should render a michelin-dropdown with correct attributes', () => {
    const result = mapperFn()(materialInputDropdownJson);
    expect(result).toEqual({
      type: 'michelin-dropdown',
      props: {
        type: 'Input',
      },
      children: [],
    });
  });
  
  it('should render a michelin-dropdown with type="Button dropdown" when Type is set accordingly', () => {
    const buttonDropdownJson = {
      ...materialInputDropdownJson,
      "Type": "Button dropdown"
    };
    
    const result = mapperFn()(buttonDropdownJson);
    expect(result).toEqual({
      type: 'michelin-dropdown',
      props: {
        type: 'Button dropdown',
      },
      children: [],
    });
  });
});
