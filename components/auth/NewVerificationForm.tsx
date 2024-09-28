"use client";
import React, { useCallback, useEffect } from "react";
import CardWrapper from "@/components/auth/CardWrapper";

import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

export default function NewVerificationForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const onSubmit = useCallback(() => {
    console.log(token);
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center w-full justify-center">
        <BeatLoader />
      </div>
    </CardWrapper>
  );
}
