const fs = jest.createMockFromModule('fs');

// let mockFiles = Object.create(null);
// function __setMockFiles(newMockFiles) {
//   mockFiles = Object.create(null);
//   for (const file in newMockFiles) {
//     const dir = path.dirname(file);

//     if (!mockFiles[dir]) {
//       mockFiles[dir] = [];
//     }
//     mockFiles[dir].push(path.basename(file));
//   }
// }

// function readdirSync(directoryPath) {
//     return Promise.resolve(mockFiles[directoryPath] || []);
//     // return mockFiles[directoryPath] || [];
// }
  
// const path = 'mockedPath';
fs.readFile = jest.fn((path) => Promise.resolve('Mocked file contents'));
// fs.__setMockFiles = __setMockFiles;
// fs.readdirSync = readdirSync;
// export default fs ;