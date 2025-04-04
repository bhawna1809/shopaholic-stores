import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const ProductReviewPage = () => {
  const [reviews, setReviews] = useState([
    { id: 1, user: "Jane Doe", rating: 4, comment: "Great product! Really loved the quality." },
    { id: 2, user: "John Smith", rating: 5, comment: "Exceeded my expectations! Highly recommend." },
    { id: 3, user: "Emily Johnson", rating: 3, comment: "Good but could be improved in some areas." },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [newReview, setNewReview] = useState({ user: "", rating: "", comment: "" });

  const handleAddReview = () => {
    if (!newReview.user || !newReview.rating || !newReview.comment) {
      alert("Please fill in all fields!");
      return;
    }

    const newEntry = {
      id: reviews.length + 1,
      user: newReview.user,
      rating: parseInt(newReview.rating),
      comment: newReview.comment,
    };

    setReviews([...reviews, newEntry]); // Update state
    setNewReview({ user: "", rating: "", comment: "" }); // Reset form
    setIsOpen(false); // Close modal
  };

  return (
    <div className="w-full max-w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Reviews</h1>
      
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-4 shadow-md">
            <CardContent className="w-full max-w-full">
              <h2 className="font-semibold">{review.user}</h2>
              <div className="flex items-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="mt-4" onClick={() => setIsOpen(true)}>Add a Review</Button>

      {/* Popup Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Add a Review</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <Input
              placeholder="Your Name"
              value={newReview.user}
              onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Rating (1-5)"
              min="1"
              max="5"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
            />
            <Textarea
              placeholder="Write your review..."
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            />
          </div>

          <DialogFooter>
            <Button onClick={handleAddReview}>Submit Feedback</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductReviewPage;
