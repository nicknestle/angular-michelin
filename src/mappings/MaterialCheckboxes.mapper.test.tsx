import { describe, it, expect, vi, beforeEach } from 'vitest';
import materialCheckboxesJson from './MaterialCheckboxes.json';
import { createFigmaMock } from './test-utils';

// Create figma mock with mapper accessor
const figmaMock = createFigmaMock();
const mapperFn = figmaMock.getMapperFn;

// Mock the figma module before the tests run
vi.mock('@builder.io/dev-tools/figma', () => figmaMock.mockObject);

describe('MaterialCheckboxes Mapper', () => {
  beforeEach(async () => {
    // Reset the module registry before each test
    vi.resetModules();
    // Import the mapper which will set the mapperFn
    await import('./MaterialCheckboxes.mapper');
  });

  it('should render a basic mat-checkbox', () => {
    const result = mapperFn()(materialCheckboxesJson);
    expect(result).toEqual({
      type: 'mat-checkbox',
      props: {
        checked: true,
      },
      children: [],
    });
  });
  
  it('should render a checked checkbox when Type is "Selected"', () => {
    const selectedCheckbox = {
      ...materialCheckboxesJson,
      "Type": "Selected"
    };
    
    const result = mapperFn()(selectedCheckbox);
    expect(result).toEqual({
      type: 'mat-checkbox',
      props: {
        checked: true,
      },
      children: [],
    });
  });
  
  it('should render a checked checkbox when Type is "Error selected"', () => {
    const errorSelectedCheckbox = {
      ...materialCheckboxesJson,
      "Type": "Error selected"
    };
    
    const result = mapperFn()(errorSelectedCheckbox);
    expect(result).toEqual({
      type: 'mat-checkbox',
      props: {
        checked: true,
        color: 'warn',
      },
      children: [],
    });
  });
  
  it('should render an indeterminate checkbox when Type is "Indeterminate"', () => {
    const indeterminateCheckbox = {
      ...materialCheckboxesJson,
      "Type": "Indeterminate"
    };
    
    const result = mapperFn()(indeterminateCheckbox);
    expect(result).toEqual({
      type: 'mat-checkbox',
      props: {
        indeterminate: true,
      },
      children: [],
    });
  });
  
  it('should render a disabled checkbox when State is "Disabled"', () => {
    const disabledCheckbox = {
      ...materialCheckboxesJson,
      "State": "Disabled"
    };
    
    const result = mapperFn()(disabledCheckbox);
    expect(result).toEqual({
      type: 'mat-checkbox',
      props: {
        checked: true,
        disabled: true,
      },
      children: [],
    });
  });
  
  it('should render with the correct class based on State', () => {
    const hoveredCheckbox = {
      ...materialCheckboxesJson,
      "State": "Hovered"
    };
    
    const result = mapperFn()(hoveredCheckbox);
    expect(result).toEqual({
      type: 'mat-checkbox',
      props: {
        checked: true,
        class: 'mat-checkbox-hovered',
      },
      children: [],
    });
  });
});
