import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { sendJoinSessionEmail } from '@/utils/email';

interface JoinSessionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  sessionTitle: string;
}

const JoinSessionDialog = ({ isOpen, onClose, sessionTitle }: JoinSessionDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendJoinSessionEmail({
        ...formData,
        sessionTitle
      });
      
      if (result.success) {
        setSubmitResult({
          success: true,
          message: 'Registration successful! We will contact you with more details soon.'
        });
        // Reset form after success
        setFormData({
          name: '',
          email: '',
        });
        // Close dialog after a short delay
        setTimeout(() => {
          onClose();
          setSubmitResult({});
        }, 3000);
      } else {
        setSubmitResult({
          success: false,
          message: 'There was an error processing your registration. Please try again later.'
        });
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'There was an error processing your registration. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-playfair">Join Session</DialogTitle>
          <DialogDescription>
            {sessionTitle}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          
          {submitResult.message && (
            <div className={`p-3 rounded-md ${submitResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitResult.message}
            </div>
          )}
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" className="bg-scripture hover:bg-scripture-dark" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JoinSessionDialog;
