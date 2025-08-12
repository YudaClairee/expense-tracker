"use client"

import { useRef, useState } from "react";
import addExpenseTracker from '@/actions/addExpenseRecord'
import {  Coins, Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";

export default function AddNewRecord() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [amount, setAmount] = useState<number>(100000);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState<string>("");


  async function clientAction(formData: FormData) {
    setIsLoading(true); // kasih spinner
    setAlertMessage(null); // clear message sebelumnya

    formData.set("amount", amount.toString());
    formData.set("category", category);

    const {error} = await addExpenseTracker(formData);

    if(error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType("error");
    } else {
      setAlertMessage("Transaksi berhasil ditambahkan");
      setAlertType("success");
      formRef.current?.reset();
      setAmount(100000);
      setCategory("");
      setDescription("");
    }

    setIsLoading(false); // stop spinner
  }
  

  return (
    <div className="border border-border rounded-lg p-4 sm:p-6 mt-10 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-2">
        <Coins className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-lg font-semibold">Masukkan pengeluaran kamu</h2>
          <p className="text-sm text-muted-foreground">Kamu dapat mencatat pengeluaran kamu dengan mudah dan dapatkan insight cerdas dari AI untuk mengelola keuangan kamu.</p>
        </div>
      </div>
      <form ref={formRef} onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current!);
        clientAction(formData);
      }}
      className="space-y-6 sm:space-y-8 mt-4"
      >
        {alertMessage && (
          <div className={`p-4 rounded-md ${
            alertType === "success" 
              ? "bg-green-50 border border-green-200 text-green-800" 
              : "bg-red-50 border border-red-200 text-red-800"
          }`}>
            {alertMessage}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Deskripsi</Label>
            <Input
              type="text"
              name="text"
              id="text"
              placeholder="Masukkan deskripsi transaksi"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full bg-background border border-border rounded-md p-2 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary focus-visible:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Tanggal Transaksi</Label>
            <Input
              type="date"
              name="date"
              id="date"
              required
              onFocus={(e) => e.target.showPicker()}
              className="w-full bg-background border border-border rounded-md p-2 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Kategori dan Jumlah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Kategori</Label>
            <Select
              name="category"
              value={category}
              onValueChange={(value) => setCategory(value)}
              required
            >
              <SelectTrigger className="w-full bg-background border border-border rounded-md p-2 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary focus-visible:ring-primary">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="makanan">Makanan</SelectItem>
                <SelectItem value="transportasi">Transportasi</SelectItem>
                <SelectItem value="belanja">Belanja</SelectItem>
                <SelectItem value="kesehatan">Kesehatan</SelectItem>
                <SelectItem value="hiburan">Hiburan</SelectItem>
                <SelectItem value="lainnya">Lainnya</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Jumlah</Label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">Rp</span>
            <Input
              type="number"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              required
              className="pl-8"
            />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Tambah Transaksi"
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}