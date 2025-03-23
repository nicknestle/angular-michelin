import { describe, it, expect, vi, beforeEach } from 'vitest';
import materialRadioButtonJson from './MaterialRadioButton.json';
import { createFigmaMock } from './test-utils';

// Create figma mock with mapper accessor
const figmaMock = createFigmaMock();
const mapperFn = figmaMock.getMapperFn;

// Mock the figma module before the tests run
vi.mock('@builder.io/dev-tools/figma', () => figmaMock.mockObject);

describe('MaterialRadioButtons Mapper', () => {
  beforeEach(async () => {
    // Reset the module registry before each test
    vi.resetModules();
    // Import the mapper which will set the mapperFn
    await import('./MaterialRadioButtons.mapper');
  });

  it('should render a mat-radio-group with enabled radio buttons by default', () => {
    const result = mapperFn()(materialRadioButtonJson);
    
    expect(result).toEqual({
      type: 'mat-radio-group',
      props: {},
      children: [
        {
          type: 'mat-radio-button',
          props: {
            value: '1'
          },
          children: ['Option 1']
        },
        {
          type: 'mat-radio-button',
          props: {
            value: '2'
          },
          children: ['Option 2']
        }
      ]
    });
  });
  
  it('should render a disabled mat-radio-group when State is "Disabled"', () => {
    const disabledRadioButtonJson = {
      ...materialRadioButtonJson,
      "State": "Disabled"
    };
    
    const result = mapperFn()(disabledRadioButtonJson);
    expect(result).toEqual({
      type: 'mat-radio-group',
      props: {
        disabled: true
      },
      children: [
        {
          type: 'mat-radio-button',
          props: {
            value: '1'
          },
          children: ['Option 1']
        },
        {
          type: 'mat-radio-button',
          props: {
            value: '2'
          },
          children: ['Option 2']
        }
      ]
    });
  });
});
