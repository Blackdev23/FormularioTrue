import * as C from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from "react"
import Step from "./Components/Step"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import FormPessoal from "./Pages/FormPessoal"
import FormEndereco from "./Pages/FormEndereco"
import FormProjeto from "./Pages/FormProjeto"

function App() {
  const [step, setStep] = useState(1)
  const Steps = [1,2,3]
  var progresso = 0

  const getStep = () =>{
    switch(step) {
      case 1:
        progresso = 30
        return <FormPessoal/>
      
      case 2:
        progresso = 50
        return <FormEndereco/>
        
      case 3:
        progresso = 90
        return <FormProjeto/>

      default:
        return <FormPessoal/>
    }
  }

  return (
    <C.Flex h='100vh' align='center' justify='center'>
        <C.Center maxW={500} w='100%' py={10} px={4} flexDirection='column' border="2px" borderColor="black" borderRadius="10px ">
          
          <C.HStack spacing={4}>
            {Steps.map((item) =>(
              <Step key={item} index={item} active={step===item}/>
            ))}

          </C.HStack>
          
          <C.Divider my={4} borderColor='black.400'></C.Divider>
          <C.Box  w='80%'>
            {getStep()}
          </C.Box>


          <C.HStack mt={4} spacing={10} >
            
            <Button colorScheme='teal' variant='outline' onClick={() => step!==1 && setStep(step-1)}>
              Back
            </Button>

            <CircularProgress value={progresso} color='green.400' thickness='12px' />

            <Button colorScheme='teal' variant='outline' onClick={() => step!==3 && setStep(step+1)} >
            {step===3 ? "Send": "Next"}
            </Button>
          
          </C.HStack>
        </C.Center>
    </C.Flex>
  )
}

export default App
