'use client';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RatingStars } from '@/components/kidow/rating-stars';
import * as React from 'react';
import { Card } from '@/components/ui/card';

// 상류는 자체 card 의 cardVariants 를 쓴다. shadcn card 에는 없으므로
// variant 대신 className 만 받는다.

interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
  authorName: string;
  avatarUrl?: string;
  description?: string;
}
interface CardTestimonialProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonialQuote: string;
  testimonialAuthor: AuthorProps;
  testimonialRating?: number;
}
interface TestimonialContextValue {
  testimonialQuote: string;
  testimonialAuthor: AuthorProps;
  testimonialRating?: number;
}

const CardTestimonialContext = React.createContext<
  TestimonialContextValue | undefined
>(undefined);

function useCardTestimonialContext() {
  const context = React.useContext(CardTestimonialContext);
  if (context === undefined) {
    throw new Error(
      'useCardTestimonialContext must be used within a CardTestimonialProvider',
    );
  }
  return context;
}

export const CardTestimonial = ({
  testimonialQuote,
  testimonialAuthor,
  testimonialRating,
  className,
  children,
  ...props
}: CardTestimonialProps) => {
  return (
    <CardTestimonialContext.Provider
      value={{ testimonialQuote, testimonialAuthor, testimonialRating }}
    >
      <Card className={cn(className)} {...props}>
        {children}
      </Card>
    </CardTestimonialContext.Provider>
  );
};

export const TestimonialAuthor = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { testimonialAuthor } = useCardTestimonialContext();
  const { authorName, avatarUrl, description } = testimonialAuthor;
  return (
    <div className={className} {...props}>
      <Avatar className="size-10">
        <AvatarImage src={avatarUrl} alt={`Portrait of ${authorName}`} />
        <AvatarFallback>
          {authorName
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </AvatarFallback>
      </Avatar>
      <div>
        <h4 className="block text-lg font-semibold tracking-tight md:text-xl">
          {authorName}
        </h4>
        <span className="block text-sm text-muted-foreground ">
          {description}
        </span>
      </div>
      {children}
    </div>
  );
};

export const TestimonialRating = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { testimonialRating } = useCardTestimonialContext();
  return (
    <RatingStars
      className={className}
      rating={testimonialRating ?? 0}
      {...props}
    />
  );
};

export const TestimonialQuote = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) => {
  const { testimonialQuote } = useCardTestimonialContext();
  return (
    <blockquote className={className} {...props}>
      {testimonialQuote}
    </blockquote>
  );
};
