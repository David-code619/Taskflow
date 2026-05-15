import React from 'react';

export const DashboardSkeleton = () => (
  <div className="max-w-6xl mx-auto space-y-8 animate-pulse pt-4">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="space-y-2 w-full max-w-md">
        <div className="h-3 bg-muted rounded w-32 mb-2"></div>
        <div className="h-12 bg-muted rounded-lg w-full max-w-[280px]"></div>
      </div>
      <div className="h-12 bg-muted rounded-xl w-32"></div>
    </div>
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
      <div className="xl:col-span-8 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-card rounded-2xl h-24 border border-border"></div>
          ))}
        </div>
        <div className="bg-card rounded-[2rem] h-64 border border-border"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-card rounded-2xl h-16 border border-border"></div>
          ))}
        </div>
      </div>
      <div className="xl:col-span-4 space-y-8">
        <div className="bg-card rounded-[2rem] h-64 border border-border"></div>
        <div className="bg-card rounded-[2rem] h-48 border border-border"></div>
      </div>
    </div>
  </div>
);

export const MyTasksSkeleton = () => (
  <div className="max-w-6xl mx-auto animate-pulse pt-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded w-24 mb-2"></div>
        <div className="h-12 bg-muted rounded-lg w-48"></div>
        <div className="h-4 bg-muted rounded w-64 mt-2"></div>
      </div>
      <div className="flex gap-2">
        <div className="h-12 bg-muted rounded-xl w-12"></div>
        <div className="h-12 bg-muted rounded-xl w-32"></div>
      </div>
    </div>
    <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-10 bg-muted rounded-full w-24"></div>
      ))}
    </div>
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-card rounded-[1.5rem] h-24 border border-border"></div>
      ))}
    </div>
  </div>
);

export const UpcomingSkeleton = () => (
  <div className="max-w-6xl mx-auto space-y-12 animate-pulse pt-4 pb-24">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded w-32"></div>
        <div className="h-12 bg-muted rounded-lg w-48 mt-2"></div>
      </div>
      <div className="flex gap-3">
        <div className="h-12 bg-muted rounded-2xl w-40"></div>
        <div className="h-12 bg-muted rounded-2xl w-12"></div>
      </div>
    </div>
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
      <div className="xl:col-span-4 space-y-8">
        <div className="h-64 bg-muted rounded-[2rem]"></div>
        <div className="bg-card rounded-[2rem] h-48 border border-border"></div>
      </div>
      <div className="xl:col-span-8 space-y-16">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border-b border-border/50 pb-12">
            <div className="h-8 bg-muted rounded w-48 mb-8"></div>
            <div className="bg-card rounded-[1.5rem] h-32 border border-border"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const CompletedSkeleton = () => (
  <div className="max-w-6xl mx-auto space-y-12 animate-pulse pt-4 pb-20">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded w-24"></div>
        <div className="h-12 bg-muted rounded-lg w-56 mt-2"></div>
      </div>
      <div className="flex gap-3 w-full md:w-auto">
        <div className="h-12 bg-muted rounded-xl w-64"></div>
        <div className="h-12 bg-muted rounded-xl w-32"></div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-card rounded-[2rem] h-40 border border-border"></div>
      ))}
    </div>
    <div className="space-y-3 mt-8">
      <div className="h-8 bg-muted rounded w-48 mb-6"></div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-card border border-border h-24 rounded-[1.5rem]"></div>
      ))}
    </div>
  </div>
);
