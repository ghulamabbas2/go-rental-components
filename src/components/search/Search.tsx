import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ArrowRightLeft, HandCoins } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Search = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Search Your Rental Car</CardTitle>
            <CardDescription>
              Enter your details below to find the best deals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mx-auto grid w-[450px] gap-6 mt-5">
              <form>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="location">Pick Up Location</Label>
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="dates">Select Dates</Label>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="budget">Budget Per Day (Optional)</Label>
                    <div className="relative flex-1 md:grow-0">
                      <HandCoins className="absolute left-4 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="number"
                        placeholder="50"
                        className="w-full rounded-lg bg-background pl-10"
                      />
                    </div>
                  </div>

                  <Button type="button" className="w-full mt-5">
                    <ArrowRightLeft className="h-4 w-4 mr-2" />
                    Find Best Deals
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="/images/search-car.jpg"
          alt="banner"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale opacity-70"
        />
      </div>
    </div>
  );
};

export default Search;
