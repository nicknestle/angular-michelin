import { describe, it, expect, vi, beforeEach } from 'vitest';
import materialTextFieldInputsJson from './MaterialTextFieldInputs.json';
import { createFigmaMock } from './test-utils';

// Create figma mock with mapper accessor
const figmaMock = createFigmaMock();
const mapperFn = figmaMock.getMapperFn;

// Mock the figma module before the tests run
vi.mock('@builder.io/dev-tools/figma', () => figmaMock.mockObject);

describe('MaterialTextFieldInputs Mapper', () => {
  beforeEach(async () => {
    // Reset the module registry before each test
    vi.resetModules();
    // Import the mapper which will set the mapperFn
    await import('./MaterialTextFieldInputs.mapper');
  });

  it('should render an input with matInput attribute', () => {
    const result = mapperFn()(materialTextFieldInputsJson);
    expect(result).toEqual({
      type: 'mat-form-field',
      props: {},
      children: [
        {
          type: 'input',
          props: {
            matInput: true
          },
          children: []
        }
      ]
    });
  });
  
  it('should render with correct label and value attributes', () => {
    const textFieldInputsWithValues = {
      ...materialTextFieldInputsJson,
      "Label text": "Test Label",
      "Input text": "Test Value"
    };
    
    const result = mapperFn()(textFieldInputsWithValues);
    expect(result).toEqual({
      type: 'mat-form-field',
      props: {
        label: 'Test Label'
      },
      children: [
        {
          type: 'input',
          props: {
            matInput: true,
            value: 'Test Value'
          },
          children: []
        }
      ]
    });
  });
  
  it('should render with correct variant based on Style property', () => {
    const outlinedTextField = {
      ...materialTextFieldInputsJson,
      "Style": "Outlined"
    };
    
    const result = mapperFn()(outlinedTextField);
    expect(result).toEqual({
      type: 'mat-form-field',
      props: {
        variant: 'outlined'
      },
      children: [
        {
          type: 'input',
          props: {
            matInput: true
          },
          children: []
        }
      ]
    });
  });
  
  it('should render with supporting text when Show supporting text is true', () => {
    // Mock the $findOneByName method to return a text element with specific content
    const mockTextFieldWithSupportingText = {
      ...materialTextFieldInputsJson,
      "Show supporting text": true,
      $findOneByName: (name: string) => {
        if (name === "supporting-text") {
          return { $textContent: "Help text for the input" };
        }
        return null;
      }
    };
    
    const result = mapperFn()(mockTextFieldWithSupportingText);
    expect(result).toEqual({
      type: 'mat-form-field',
      props: {
        supportingText: 'Help text for the input'
      },
      children: [
        {
          type: 'input',
          props: {
            matInput: true
          },
          children: []
        }
      ]
    });
  });
  
  it('should render with disabled state when State is "Disabled"', () => {
    const disabledTextField = {
      ...materialTextFieldInputsJson,
      "State": "Disabled"
    };
    
    const result = mapperFn()(disabledTextField);
    expect(result).toEqual({
      type: 'mat-form-field',
      props: {
        state: 'disabled'
      },
      children: [
        {
          type: 'input',
          props: {
            matInput: true
          },
          children: []
        }
      ]
    });
  });
});
