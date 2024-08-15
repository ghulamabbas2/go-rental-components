import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Label } from "../ui/label";
import { Coins, CreditCard, ReceiptText } from "lucide-react";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import AlertCard from "../layout/AlertCard";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-10 flex items-center">
        <h1 className="text-4xl text-gray-600">Booking # SampleID</h1>
      </div>
      <div className="flex items-center">
        <Card className="h-full w-full max-w-xl me-10">
          <div className="flex items-center justify-start">
            <ReceiptText className="h-12 w-12 ms-5" />
            <CardHeader className="ps-2">
              <CardTitle>Booking Summary</CardTitle>
              <CardDescription>Below are your booking details</CardDescription>
            </CardHeader>
          </div>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-3">
                <div className="flex justify-between">
                  <p className="text-md">Days of Rent:</p>
                  <p className="font-bold">5</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-md">Rent Per Day:</p>
                  <p className="font-bold">$50</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-md">Total Rent:</p>
                  <p className="font-bold">$250</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-md">Discount:</p>
                  <p className="font-bold">$20</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-md">Tax (15%):</p>
                  <p className="font-bold">$34.50</p>
                </div>
                <DropdownMenuSeparator />

                <div className="flex justify-between">
                  <p className="text-md">Grand Total:</p>
                  <p className="font-bold">$264.50</p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="h-full w-full max-w-xl">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>
              Select your payment method to complete this booking
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-6">
              <Label
                htmlFor="card"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="card" id="card" className="sr-only" />
                <Coins className="mb-3 h-6 w-6" />
                Cash
              </Label>
              <Label
                htmlFor="paypal"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="sr-only"
                />
                <CreditCard className="mb-3 h-6 w-6" />
                Card
              </Label>
            </RadioGroup>
            <AlertCard
              title="Pay Cash within 2 days"
              description="Otherwise your booking will be removed."
            />
            <AlertCard
              title="Instant Confirmation"
              description="Booking will be confirmed after payment"
              color="green"
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <CreditCard className="mr-2 h-4 w-4" /> Pay Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PaymentMethod;
