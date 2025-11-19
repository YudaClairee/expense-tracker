"use client";

import { useRef, useState } from "react";
import addExpenseTracker from "@/actions/addExpenseRecord";
import { Loader2, Plus } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

    const { error } = await addExpenseTracker(formData);

    if (error) {
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5 text-primary" />
          Tambah Pengeluaran Baru
        </CardTitle>
        <CardDescription>
          Masukkan detail pengeluaran kamu di sini.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(formRef.current!);
            clientAction(formData);
          }}
          className="space-y-4"
        >
          {alertMessage && (
            <div
              className={`p-3 rounded-md text-sm ${
                alertType === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {alertMessage}
            </div>
          )}

          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label>Deskripsi</Label>
              <Input
                type="text"
                name="text"
                id="text"
                placeholder="contoh: Makan siang di Cafe"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Tanggal</Label>
                <Input type="date" name="date" id="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Kategori</Label>
                <Select
                  name="category"
                  value={category}
                  onValueChange={(value) => setCategory(value)}
                  required
                >
                  <SelectTrigger>
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Jumlah (Rp)</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                  Rp
                </span>
                <Input
                  type="number"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                  required
                  className="pl-9"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Simpan"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
