import { useState } from 'react';

export const Form = ({newLocation}) => {

    const [city, setCity] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (city==='' || !city) return;
        console.log({city});
        newLocation(city);
    }

  return (
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="input-group mb-3 mx-auto">
                <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Ej.: Sitges"
                    onChange={(e) => setCity(e.target.value)}
                    helperText="Escribe el nombre de una ciudad o municipio"
                />
                <button
                    className='btn btn-primary input-group-text'
                    type='submit'
                >
                    <h6 class="m-0 font-bold">Buscar</h6>
                </button>
            </div>
        </form>
        <h6 className='helper-text'>Escribe el nombre de una ciudad o municipio</h6>
    </div>
  )
}
