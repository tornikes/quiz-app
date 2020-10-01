import axios from 'axios';

async function fetchCategories() {
    const response = await axios.get('https://opentdb.com/api_category.php');
    return response.data;
}

async function fetchQuestions(config) {
    let url = 'https://opentdb.com/api.php?amount=10&type=multiple&';
    const options = [];
    if(config.category) options.push(`category=${config.category}`);
    if(config.difficulty) options.push(`difficulty=${config.difficulty}`);
    url += options.join('&');
    const response = await axios.get(url);
    return response;
}

export default { fetchCategories, fetchQuestions }