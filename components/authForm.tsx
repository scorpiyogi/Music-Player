import { Box, Flex, Input, Button } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FC, useState } from "react"
import { useSWRConfig } from "swr"
import { auth } from "../lib/mutations"
import NextImage from "next/image"

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsloading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsloading(true)

    const user = await auth(mode, { email, password })
    setIsloading(false)
    router.push("/")
  }

  return (
    <Box height="100vh" width="100vw" bg="#231F20" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" marginTop="100px" height="calc(100vh-100px)">
        <Box padding="50px" bg="gray" align="center" borderRadius="8px">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              marginBottom="5px"
            />

            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              bg="#78CDD7"
              isLoading={isLoading}
              marginTop="4px"
              sx={{
                "&:hover": {
                  bg: "#5EB1BF",
                },
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default AuthForm
