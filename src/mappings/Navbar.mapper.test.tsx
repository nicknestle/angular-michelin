import { describe, it, expect, vi, beforeEach } from 'vitest';
import navbarJson from './Navbar.json';
import { createFigmaMock } from './test-utils';

// Create figma mock with mapper accessor
const figmaMock = createFigmaMock();
const mapperFn = figmaMock.getMapperFn;

// Mock the figma module before the tests run
vi.mock('@builder.io/dev-tools/figma', () => figmaMock.mockObject);

describe('Navbar Mapper', () => {
  beforeEach(async () => {
    // Reset the module registry before each test
    vi.resetModules();
    // Import the mapper which will set the mapperFn
    await import('./Navbar.mapper');
  });

  it('should render App Name when Visible APP NAME is true', () => {
    const navbarWithVisibleAppName = {
      ...navbarJson,
      "Visible APP NAME": true,
      "App Name": "Test App"
    };
    
    const result = mapperFn()(navbarWithVisibleAppName);
    expect(result.children.some(child => 
      child.type === 'div' && 
      child.children && 
      child.children.includes('Test App')
    )).toBe(true);
  });
  
  it('should not render App Name when Visible APP NAME is false', () => {
    const navbarWithHiddenAppName = {
      ...navbarJson,
      "Visible APP NAME": false,
      "App Name": "Test App"
    };
    
    const result = mapperFn()(navbarWithHiddenAppName);
    expect(result.children.some(child => 
      child.type === 'div' && 
      child.children && 
      child.children.includes('Test App')
    )).toBe(false);
  });
  
  it('should render user info when Loged is "true"', () => {
    const loggedInNavbar = {
      ...navbarJson,
      "Loged": "true",
      "Nom": "Doe",
      "Prnom": "John"
    };
    
    const result = mapperFn()(loggedInNavbar);
    expect(result.children.some(child => {
      if (child.type === 'div' && child.children) {
        return JSON.stringify(child).includes('Doe John');
      }
      return false;
    })).toBe(true);
  });
  
  it('should not render user info when Loged is "false"', () => {
    const loggedOutNavbar = {
      ...navbarJson,
      "Loged": "false",
      "Nom": "Doe",
      "Prnom": "John"
    };
    
    const result = mapperFn()(loggedOutNavbar);
    expect(result.children.some(child => {
      if (child.type === 'div' && child.children) {
        return JSON.stringify(child).includes('Doe John');
      }
      return false;
    })).toBe(false);
  });
});
