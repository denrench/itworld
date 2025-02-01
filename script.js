document.getElementById("quiz-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const answers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value
    };

    let result = '';

    if (answers.q1 === 'yes' && answers.q2 === 'no' && answers.q3 === 'no') {
        result = 'Вам может подойти профессия фронтенд-разработчика.';
    } else if (answers.q2 === 'yes' && answers.q3 === 'no') {
        result = 'Вам может подойти профессия бэкенд-разработчика.';
    } else if (answers.q3 === 'yes' && answers.q4 === 'yes') {
        result = 'Вам может подойти профессия аналитика данных или тестировщика.';
    } else if (answers.q4 === 'yes' && answers.q5 === 'yes') {
        result = 'Вам может подойти профессия DevOps-инженера или специалиста по кибербезопасности.';
    } else {
        result = 'Мы рекомендуем вам исследовать различные профессии в IT, чтобы выбрать подходящую!';
    }

    document.getElementById('result').innerHTML = `<strong>Ваш результат: </strong> ${result}`;
});
