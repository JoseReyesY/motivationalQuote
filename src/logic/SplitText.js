// Function to split the author until the comma
export default function splitTextAtComma(str) {
    if (!str) {
        return 'Anonym';
    } else if(str === 'type.fit') {
        return 'Anonym';
    }

    const parts = str.split(',');
    return parts[0].trim();
}