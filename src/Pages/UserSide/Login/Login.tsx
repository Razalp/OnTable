import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, Tab, Input, Button, Card, CardBody } from "@nextui-org/react";
import { Ham, Pizza, Soup, UtensilsCrossed } from 'lucide-react';
import {Select, SelectItem} from "@nextui-org/react";


const Login = () => {
    const [selected, setSelected] = React.useState<string | number>("login");
    const animals = [
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' },
        { value: 'rabbit', label: 'Rabbit' },
        { value: 'hamster', label: 'Hamster' },
        { value: 'turtle', label: 'Turtle' },
        { value: 'parrot', label: 'Parrot' },
        { value: 'goldfish', label: 'Goldfish' },
        { value: 'snake', label: 'Snake' },
        { value: 'frog', label: 'Frog' },
        { value: 'lizard', label: 'Lizard' }
      ];

    return (
        <div
            className='h-screen grid place-items-center text-white md:grid-cols-2'
    
        >
           
           <motion.div
    className="col-span-1 flex justify-center items-center text-4xl font-bold"
    initial={{ opacity: 0, y: -20, rotateY: -90 }}
    animate={{ opacity: 1, y: 0, rotateY: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
>
    <div className="text-blue-1000  text-4xl leading-tight font-extrabold md:text-6xl " style={{ perspective: 1000 }}>
        <motion.div>
            <br /><br />
            Order it <br />
            <span className="text-3xl md:5xl sm:font-extrabold">have it ...</span>
        </motion.div>
        <br/>
        <br/>
    </div>
</motion.div>

            
            <div>
                
                <div className="flex flex-col w-full">
                    <Card className="max-w-full w-[300px] h-[350px] bg-slate-950 md:max-w-full md:w-[340px]">
                        <CardBody className="overflow-hidden">
                            <Tabs
                                fullWidth
                                size="md"
                                aria-label="Tabs form"
                                selectedKey={selected}
                                onSelectionChange={setSelected}
                            >
                                <Tab key="login" title="Login">
                                    <form className="flex flex-col gap-4">
                                        <Input isRequired label className='' placeholder="Enter your name" type="text" />
                                        <Select
      items={animals}
      label=""
      placeholder="Select an table number   "
      className="max-w-xs"
    >
      {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
    </Select>

                                        <div className="flex gap-2 justify-end">
                                            <Button fullWidth color="warning">
                                                Go to shop
                                            </Button>
                                        </div>
                                    </form>
                                </Tab>
                            </Tabs>
                        </CardBody>
                    </Card>
                </div>
           </div>
            <motion.div
                className="col-span-1 flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="flex gap-4">
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: "100%", opacity: 1 }}
                        transition={{
                            duration: 3, 
                            delay: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    >
                        <Ham size={40} />
                    </motion.div>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: "100%", opacity: 1 }}
                        transition={{
                            duration: 2.5,
                            delay: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    >
                        <Pizza size={40} />
                    </motion.div>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: "100%", opacity: 1 }}
                        transition={{
                            duration: 2.7, 
                            delay: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    >
                        <Soup size={40} />
                    </motion.div>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: "100%", opacity: 1 }}
                        transition={{
                            duration: 3, 
                            delay: 0.3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    >
                        <UtensilsCrossed size={40} />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Login;
