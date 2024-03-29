
import {Card, CardHeader, Image, Button} from "@nextui-org/react";

import first from './ImagesofFood/1.jpg'
import first2 from './ImagesofFood/2.jpg'
import first3 from './ImagesofFood/3.jpg'
import first4 from './ImagesofFood/4.jpg'
import first5 from './ImagesofFood/5.jpg'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import { useState } from "react";



  
  

const FoodComponets = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null| any>(null);

    const handleCardClick = (imageSrc:any) => {
        setSelectedImage(imageSrc);
        setDrawerOpen(true);
      };
  return (




    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 ">


   
    <Card className="col-span-12 sm:col-span-4 h-[300px]" onClick={() => handleCardClick(first5)}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
        <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={first5}
        isZoomed
      />
      <Button >bu</Button>
    </Card>
   
    <Card className="col-span-12 sm:col-span-4 h-[300px]" onClick={() => handleCardClick(first5)}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={first2}
        isZoomed
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]" onClick={() => handleCardClick(first5)}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={first3}
        isZoomed
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]" onClick={() => handleCardClick(first5)}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={first3}
        isZoomed
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={first}
        isZoomed
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]" onClick={() => handleCardClick(first5)}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={first4}
        isZoomed
      />
    </Card>

    <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <img src={selectedImage} alt="Selected Image" />
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose>
                            <Button onClick={() => setDrawerOpen(false)}>Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
  </div>


  )
}

export default FoodComponets
