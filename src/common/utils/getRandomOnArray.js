export default function getRandomOnArray(arr) {
    return arr[Math.floor(Math.random() * (arr.length)) + 0];
}