
import React from 'react';

const JsxRender = () => {
    const json = [
        {
            'id': 1,
            'name': 'sergio',
            'surname': 'paniagua',
            'notas': {
                'math': 10,
                'physics': 9
            }
        },
        {
            'id': 2,
            'name': 'Alex',
            'surname': 'paniagua',
            'notas': {
                'math': 9,
                'physics': 9
            }
        },
        {
            'id': 3,
            'name': 'Pablo',
            'surname': 'paniagua'
        }
    ];
    return (
        <>
            {
                json.map(({ id, name, surname, notas }) => {
                    return (
                        <div key={id} className="alumno">
                            <p style={{ 'color': 'red' }}>{id}</p>
                            <p>{name}</p>
                            <p>{surname}</p>
                            <ul>
                                {
                                    notas && Object.keys(notas).map((el) => (<li key={el}>{el}</li>))
                                }
                            </ul>
                        </div>
                    );
                })
            }
        </>
    );
};

export default JsxRender;
