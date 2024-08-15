import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

const Filters = () => {
  const carCategories = ["Sedan", "SUV", "Coupe", "Convertible"];
  const carBrands = ["Toyota", "Honda", "Ford", "Chevrolet"];
  const carTransmissions = ["Automatic", "Manual"];
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-start bg-muted/25">
          <div className="grid gap-0.5">
            <div className="text-sm text-muted-foreground">
              <div className="filter-section my-8">
                <form>
                  <h2 className="text-xl font-bold mt-4 my-2">Type keyword</h2>
                  <div className="relative ml-auto flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full rounded-lg bg-background pl-8"
                    />
                  </div>
                </form>
              </div>

              <div className="filter-section my-8">
                <h2 className="text-xl font-bold mt-4 my-3">Car Type</h2>
                {carCategories?.map((category) => (
                  <div
                    key={category}
                    className="flex items-center space-x-2 my-2"
                  >
                    <Checkbox id="category" name="category" value={category} />
                    <label
                      htmlFor="carType"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              <div className="filter-section my-8">
                <h2 className="text-xl font-bold mt-4 my-3">Select Brand</h2>
                {carBrands?.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2 my-2">
                    <Checkbox id="brand" name="brand" value={brand} />
                    <label
                      htmlFor="carBrand"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>

              <div className="filter-section my-8">
                <h2 className="text-xl font-bold mt-4 my-3">Transmission</h2>
                {carTransmissions?.map((transmission) => (
                  <div
                    key={transmission}
                    className="flex items-center space-x-2 my-2"
                  >
                    <Checkbox
                      id="transmission"
                      name="transmission"
                      value={transmission}
                    />
                    <label
                      htmlFor="carTransmission"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {transmission}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Filters;
