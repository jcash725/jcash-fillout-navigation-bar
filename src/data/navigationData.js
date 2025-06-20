export const defaultNavigationBarPages = [
    {
        id: 'info',
        name: 'Info'
    },
    {
        id: 'details',
        name: 'Details'
    },
    {
        id: 'other',
        name: 'Other'
    },
    {
        id: 'ending',
        name: 'Ending'
    }
];
export const STORAGE_KEY = 'navigationBarPages';
export const loadSavedPages = () => {
    try {
        const savedPages = localStorage.getItem(STORAGE_KEY);
        return savedPages ?
            JSON.parse(savedPages) :
            defaultNavigationBarPages;
    }
    catch {
        return defaultNavigationBarPages;
    }
};
export const resetToDefault = () => {
    localStorage.removeItem(STORAGE_KEY);
    return defaultNavigationBarPages;
};
