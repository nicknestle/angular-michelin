import htm from 'htm';

// @ts-ignore
function h(type, props, ...children) {
  return { type, props, children };
}

const html = htm.bind(h);

// Helper function for creating figma module mock
export const createFigmaMock = () => {
  let exportedMapperFn: any;
  
  // Mock object
  const mockObject = {
    html,
    figmaMapping: ({ mapper }: any) => {
      exportedMapperFn = mapper;
      return mapper;
    }
  };
  
  // Function to get the mapper function
  const getMapperFn = () => exportedMapperFn;
  
  return { mockObject, getMapperFn };
};
