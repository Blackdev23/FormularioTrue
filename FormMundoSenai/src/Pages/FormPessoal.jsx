import * as C from "@chakra-ui/react"
import { Radio, RadioGroup } from '@chakra-ui/react'


function FormPessoal(){
    return(
        <C.VStack>
            <h2>Cadastro - Pessoal</h2>
            <C.Input type="text" placeholder="Digite o seu nome" id="nomeAluno"/>
            <C.Input type="text" placeholder="Digite o seu CPF" id="cpfAluno"/>
            <C.Input type="email" placeholder="Digite o seu email" id="emailAluno"/>
           
           <RadioGroup  defaultValue='2'>
                <C.Stack spacing={5} direction='row'>
                    <Radio colorScheme='red' value='1'>
                    Feminino
                    </Radio>

                    <Radio colorScheme='green' value='2'>
                    Masculino
                    </Radio>
                </C.Stack> 
            </RadioGroup>
        </C.VStack>
        
    )
}

export default FormPessoal