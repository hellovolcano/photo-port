import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('contact', () => {
    it('renders', () => {
        render(<ContactForm/>)
    })

    it('matches snapshot', () => {
        const {asFragment} = render(<ContactForm/>)
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders and changes h1', () => {
        const { getByTestId } = render(<ContactForm />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })

    it('renders and has submit button', () => {
        const { getByTestId } = render(<ContactForm />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit')
    })
})