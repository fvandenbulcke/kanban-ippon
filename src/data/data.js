import tasks from './tasks.json'

const colors = ['green', 'red', 'blue', 'yellow', 'violet'];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getColor(){
	return colors[getRandomInt(colors.length-1)]
}

const tasksWithBackgroundColor = tasks.map((entry) => ({ ...entry, color: getColor()}))

export const getTasks = () => tasksWithBackgroundColor;
