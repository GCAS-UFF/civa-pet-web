import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import ApplicationForm from '../components/ApplicationForm/ApplicationForm';

describe('src/components/ApplicationForm', () => {
  it("should render labels correctly", () => {
    const { getByLabelText } = render(<ApplicationForm />)          
    expect(getByLabelText("Nome da Vacina")).toBeTruthy()
    expect(getByLabelText("Laboratório")).toBeTruthy()
    expect(getByLabelText("Partida")).toBeTruthy()
    expect(getByLabelText("Peso do Pet")).toBeTruthy()
  })

  describe("should insert data in the inputs fields without errors", () => {
    it("vaccine input field", () => {
      const { queryByLabelText } = render(<ApplicationForm />)    
      const vaccineInputField = queryByLabelText('Nome da Vacina')
      fireEvent.change(vaccineInputField, {target: {value: 'Anti-rábica'}})
      //@ts-ignore
      expect(vaccineInputField.value).toBe('Anti-rábica')
    })

    it("batch input field", () => {
      const { queryByLabelText } = render(<ApplicationForm />)    
      const batchInputField = queryByLabelText('Partida')
      fireEvent.change(batchInputField, {target: {value: '2021/01'}})  
      //@ts-ignore  
      expect(batchInputField.value).toBe('2021/01')
    })

    it("lab input field", () => {
      const { queryByLabelText } = render(<ApplicationForm />)    
      const labInputField = queryByLabelText('Laboratório')
      fireEvent.change(labInputField, {target: {value: 'Jhonson'}})  
      //@ts-ignore
      expect(labInputField.value).toBe('Jhonson')
    })
    it("weigtht input field", () => {
      const { queryByLabelText } = render(<ApplicationForm />)      
      const weigthInputField = queryByLabelText('Peso do Pet')
      fireEvent.change(weigthInputField, {target: {value: '10Kg'}})
      //@ts-ignore
      expect(weigthInputField.value).toBe('10Kg')
    })
  })  
})
