import { Request, Response } from 'express';
import { prisma } from '..';

export const getItemsFromCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.cart.findFirst({
      where: {
        id: +id,
      },
      include: {
        cartItem: true,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

// Don't have Cart ID: When no cart exists, create a new cart with the new item and quantity
// Have Cart ID: When a cart exists and no item exists for the product id, add the new item and quantity
// Have Cart ID: When a cart exists and an item exists for the product id, update the quantity (+ or -)
// Have Cart ID: When a cart exists and an item exists for the product id and the quantity is 0, delete the item
export const updateCart = async (req: Request, res: Response) => {
  try {
    const { productId, quantity, id, userId } = req.body;
    const now = new Date();
    if (!id) {
      const data = await prisma.cart.create({
        data: {
          cartItem: {
            create: {
              productId,
              quantity,
              createdAt: now,
              updatedAt: now,
            },
          },
          createdAt: now,
          updatedAt: now,
          user: {
            connect: {
              id: Number(userId),
            },
          },
        },
      });
      return res.json(data);
    } else {
      const cart = await prisma.cart.findFirst({
        where: {
          id: +id,
        },
        include: {
          cartItem: true,
        },
      });

      let productExistsInCart = false;
      let cartItemId;
      if (
        cart?.cartItem.find((item) => {
          if (item.productId === +productId) {
            cartItemId = item.id;
            return true;
          }
        })
      ) {
        productExistsInCart = true;
      }

      if (productExistsInCart) {
        if (quantity === 0) {
          const data = await prisma.cartItem.delete({
            where: {
              id: cartItemId,
            },
          });
          return res.json(data);
        } else {
          const updatedCartItem = await prisma.cartItem.update({
            where: {
              id: cartItemId,
            },
            data: {
              quantity,
            },
          });
          return res.json(updatedCartItem);
        }
      } else {
        const data = await prisma.cart.update({
          where: {
            id: +id,
          },
          data: {
            cartItem: {
              create: {
                productId: +productId,
                quantity: +quantity,
              },
            },
          },
        });
        return res.json(data);
      }
    }
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const clearItemsFromCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.cart.update({
      where: {
        id: +id,
      },
      data: {
        cartItem: {
          deleteMany: {},
        },
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const getItemsInCartByUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.cart.findFirst({
      where: {
        userId: +id,
      },
      include: {
        cartItem: true,
      },
    });
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export const getTotalFromCart = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await prisma.cart.findFirst({
      where: {
        id: +id,
      },
      include: {
        cartItem: {
          include: {
            product: {
              select: {
                price: true,
              },
            },
          },
        },
      },
    });

    const total = data?.cartItem.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    return res.json({ total });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
