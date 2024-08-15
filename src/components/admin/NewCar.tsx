import AdminLayout from "./AdminLayout";
import { ChevronLeft, Upload, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router-dom";

const NewCar = () => {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  return (
    <AdminLayout>
      <div className="flex min-h-screen w-full flex-col bg-muted/40 my-5">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <Link to={"/admin/cars"}>
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Button>
                </Link>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Add a New Car
                </h1>
                <div className="items-center gap-2 ml-auto">
                  <Button className="w-[120px]">Create Car</Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8 my-5">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Car Details</CardTitle>
                      <CardDescription>
                        Enter the rental car details below
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div>
                          <h2>Name</h2>
                          <p>shadcn</p>
                        </div>
                        <div>
                          <h2>Rent Per Day</h2>
                          <p>$50</p>
                        </div>
                        <div>
                          <h2>Description</h2>
                          <p>Enter a description</p>
                        </div>
                        <div>
                          <h2>Address</h2>
                          <p>123 Main St</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Car Features / Specs</CardTitle>
                      <CardDescription>
                        Enter car features and specifications below
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h2>Brand</h2>
                            <p>Toyota</p>
                          </div>
                          <div>
                            <h2>Transmission</h2>
                            <p>Automatic</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h2>Seats</h2>
                            <p>4</p>
                          </div>
                          <div>
                            <h2>Doors</h2>
                            <p>4</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h2>Fuel Type</h2>
                            <p>Petrol</p>
                          </div>
                          <div>
                            <h2>Category</h2>
                            <p>SUV</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Further Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h2>Milleage</h2>
                            <p>3000</p>
                          </div>
                          <div>
                            <h2>Power (CC)</h2>
                            <p>1800</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h2>Year</h2>
                            <p>2015</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Car Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <div>
                            <h2>Status</h2>
                            <p>Available</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>Car Images</CardTitle>
                      <CardDescription>
                        Select car images below to upload
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 gap-2">
                          {images.map((image, index) => (
                            <div className="relative border" key={index}>
                              <img
                                alt="Car Images"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={image}
                                width="84"
                              />
                              <span className="absolute top-0 right-0 p-1 bg-rose-700">
                                <X color="white" className="h-4 w-4" />
                              </span>
                            </div>
                          ))}
                          <div className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </AdminLayout>
  );
};

export default NewCar;
