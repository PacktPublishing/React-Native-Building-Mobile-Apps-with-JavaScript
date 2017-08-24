export const getMockDataSpy = jest.fn();

export const getMockData = () => { 
    return new Promise(resolve => getMockDataSpy(() => resolve([{}]))) 
}