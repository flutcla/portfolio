module Maybe where

import Prelude hiding (Just, Maybe, Nothing)

data Maybe a = Nothing
             | Just a
             deriving (Show, Eq)

instance Functor Maybe where
  fmap :: (a -> b) -> Maybe a -> Maybe b
  fmap _ Nothing  = Nothing
  fmap f (Just x) = Just $ f x
  (<$) :: a -> Maybe b -> Maybe a
  (<$) x Nothing  = Nothing
  (<$) x (Just _) = Just x

instance Applicative Maybe where
  pure :: a -> Maybe a
  pure = Just
  (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
  Just f  <*> m = fmap f m
  Nothing <*> _ = Nothing
  (*>) :: Maybe a -> Maybe b -> Maybe b
  Just _  *> m = m
  Nothing *> _ = Nothing

instance Monad Maybe where
  (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe b
  (Just x) >>= f = f x
  Nothing  >>= _ = Nothing
  (>>) :: Maybe a -> Maybe b -> Maybe b
  (>>) = (*>)


